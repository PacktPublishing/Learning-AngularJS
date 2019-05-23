describe('my app', function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it("entering note and performing click", function() {
    input('new_todo').enter('new item');

    element('#new_todo').query(function($el, done) {
        var event = new CustomEvent('keyup');
        event.keyCode = 13;
        $el.val(2);
        $el.get(0).dispatchEvent(event);
        done();
    });

    expect(element('.task').count()).toBe(1);
  });
});
