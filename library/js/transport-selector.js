var RegTempList = [
{ label: "Basic shipping (7-10 days) - 10 usd", value: 1000},
{ label: "Express", value: 1001},
{ label: "#", value: 1002},
{ label: "#", value: 1003}]

 $().ready(function() {
    $('#transport-options').autocomplete({
        minLength: 0,
        source: RegTempList,
        delay: 0,
        focus: function( event, ui ) {
            $(this).val( ui.item.label );
            return false;
        },
        select: function( event, ui ) {
            $(this).blur();
            $(this).val( ui.item.label );
            return false;
        },
        change: function (event, ui) {
            //if the value of the textbox does not match a suggestion, clear its value
            if ($(".ui-autocomplete li:textEquals('" + $(this).val() + "')").size() == 0) {
                $(this).val('');
                $('#hidPositionType').val('');
            }
        },
        close: function(event, ui) {
            $(this).blur();
            return false;
        }
    })
    .focus(function(){
        $(this).autocomplete('search','');
    })
    .data( "autocomplete" )._renderItem = function( ul, item ) {
        return $( "<li></li>" )
            .data( "item.autocomplete", item )
            .append( "<a>" + item.label + "</a>" )
            .appendTo( ul );
    }; });