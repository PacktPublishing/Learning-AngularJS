'use strict';

angular.module('d3App', [])
.directive('speedometer',function(){
	return {
		restrict: 'E',
		scope: {
			speed: '=?',
			miles: '=?'
		},
		template: "<div></div>",
		link: function( scope, element ) {
			scope.guage = null;
			scope.segDisplay = null;
			scope.speed = scope.speed || 92;
			scope.miles = scope.miles || 56749;
			scope.update = function() {
				$(element[0]).empty();

		        var svg = d3.select( element[0] )
			            .append("svg:svg")
			            .attr("width", 400)
			            .attr("height", 400);

			    scope.guage = iopctrl.arcslider()
			            .radius(120)
			            .events(false)
			            .indicator(iopctrl.defaultGaugeIndicator);

			    scope.guage.axis().orient("in")
			            .normalize(true)
			            .ticks(12)
			            .tickSubdivide(3)
			            .tickSize(10, 8, 10)
			            .tickPadding(5)
			            .scale(d3.scale.linear()
			                    .domain([0, 160])
			                    .range([-3*Math.PI/4, 3*Math.PI/4]));

			    scope.segDisplay = iopctrl.segdisplay()
			            .width(80)
			            .digitCount(6)
			            .negative(false)
			            .decimals(0);

			    svg.append("g")
			            .attr("class", "segdisplay")
			            .attr("transform", "translate(130, 200)")
			            .call(scope.segDisplay);

			    svg.append("g")
			            .attr("class", "gauge")
			            .call(scope.guage);

			    scope.segDisplay.value( scope.miles );
			    scope.guage.value( scope.speed );
			}
			scope.update();
			scope.$watch( 'speed', function( nv, ov ) {
				if ( nv != ov ) {
				    scope.guage.value( scope.speed );
				}
			} );
			scope.$watch( 'miles', function( nv, ov ) {
				if ( nv != ov ) {
				    scope.segDisplay.value( scope.miles );
				}
			} );
		}
	}
});
