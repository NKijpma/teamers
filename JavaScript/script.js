<script>
fetch("HTML/login_elements.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("login-elements").innerHTML = data;
    });
</script>
