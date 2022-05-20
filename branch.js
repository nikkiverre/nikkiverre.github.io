branch.init('key_test_pe8QA6jGnX6dTPZG8e7YlnmnwunRwzee', function(err, data) {
console.log(err, data);
});

var linkData = {
  campaign: 'content 123',
  channel: 'facebook',
  feature: 'dashboard',
  stage: 'new user',
  tags: [ 'tag1', 'tag2', 'tag3' ],
  alias: '',
  data: {
    'custom_bool': true,
    'custom_int': Date.now(),
    'custom_string': 'hello',
    '$og_title': 'Title',
    '$og_description': 'Description',
    '$og_image_url':'http://lorempixel.com/400/400'
  }
};

branch.link(linkData, function(err, link) {
  console.log(link);
});
