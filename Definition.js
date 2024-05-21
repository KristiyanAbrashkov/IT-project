let email;
document.getElementById("button").onclick = function()
{
    email = document.getElementById("input").value;
    document.getElementById("h3").textContent = `Succesfully registered: ${email}`;
    alert("Thank you for participating");
}
