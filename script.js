$(document).ready(function() {
    $("#login-form").submit(function(e) {
        e.preventDefault();
        const username = $("#username").val();
        showWelcomeContainer(username);
    });

    $("#register-link").click(function() {
        showRegisterContainer();
    });

    $("#login-link").click(function() {
        showLoginContainer();
    });

    $("#register-form").submit(function(e) {
        e.preventDefault();
        const username = $("#new-username").val();
        showWelcomeContainer(username);
    });

    $("#logout-btn").click(function() {
        showLogoutContainer();
    });
});

function showWelcomeContainer(username) {
    $("#welcome-container").removeClass("hidden");
    $("#user-greeting").text(username);
    $(".login-container").addClass("hidden");
    $("#register-form").addClass("hidden");
}

function showLoginContainer() {
    $("#welcome-container").addClass("hidden");
    $(".login-container").removeClass("hidden");
    $("#register-form").addClass("hidden");
    $("#login-form")[0].reset();
    $("#register-form")[0].reset();
    $("#login-form").removeClass("hidden");
}

function showRegisterContainer() {
    $("#welcome-container").addClass("hidden");
    $("#login-form").addClass("hidden");
    $("#register-form").removeClass("hidden");
    $("#login-form")[0].reset();
    $("#register-form")[0].reset();
}

function showLogoutContainer() {
    showLoginContainer();
}
