$(document).ready(function() {
  // Get the storage values
  chrome.storage.sync.get(null, function(items) {
    var values,
        tagName,
        formType,
        keys,
        defaultKey;
    $.each(items, function(key, value) {
      values = JSON.parse(value);
      tagName = values["tagName"];
      formType = values["type"];
      keys = values["keys"];
      defaultKey = values["defaultKey"];
      
      // check if shown
      if (values["is_shown"]) {
        console.log(values);
      } else {
        return;
      }

      // check for text or dd
      switch(formType) {
        case "dd":
          $('#tagForm').append('<div class="form-group">' +
            '<label class="col-xs-4 control-label text-right">' + tagName + '</label>' +
            '<div class="col-xs-8">' +
              '<select class="form-control" id="dd-' + tagName + '">' +

              '</select>' +
            '</div>' +
            '</div>')

          // add keys in
          $.each(keys, function(key, value) {
            $('#dd-' + tagName).append('<option value="' + value + '">' + value + '</option>');
          document.getElementById('dd-' + values["tagName"]).value = defaultKey;
          });
          break;

        case "text":
          $('#tagForm').append('<div class="form-group">' +
            '<label class="col-xs-4 control-label text-right">' + tagName + '</label>' +
            '<div class="col-xs-8">' +
              '<input class="form-control" id="text-' + tagName + '">' +
            '</div>' +
            '</div>')
      }
      
    });
  });
});

$('#sMTM').click(function() {
  // Find all the links
  var arr = [];
  var htmlString = document.getElementById('contentArea').value;
  var re = /"https:/;
  var found = htmlString.match(re);

  console.log(found);
});
