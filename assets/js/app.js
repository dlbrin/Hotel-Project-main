$(document).ready(function () {
    $("#mobile-menu-btn").click(function () {
        $("#mobile-menu").toggleClass("hidden");
    });
});

$(document).ready(function() {
    const options = {
        dateFormat: "Y-m-d",
        mode: "range",
        onClose: function(selectedDates, dateStr, instance) {
            if (selectedDates.length === 2) {
                const startDate = selectedDates[0];
                const endDate = selectedDates[1];
                console.log("Start Date:", startDate);
                console.log("End Date:", endDate);
            }
        }
    };

    const calendarInputs = document.querySelectorAll('.dual-datepicker');

    calendarInputs.forEach(input => {
        flatpickr(input, options);
    });

    $(".dropdown-trigger").click(function() {
        $(".dropdown").toggleClass("hidden");
    });

    $(document).click(function(event) {
        if (!$(event.target).closest(".dropdown-trigger").length && !$(event.target).closest(".dropdown").length) {
            $(".dropdown").addClass("hidden");
        }
    });
});