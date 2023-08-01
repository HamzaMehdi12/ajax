// DOM(Document Object Module) manipulation

//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument)

/*document.addEventListener("DOMContentLoaded", function (event) {
		function sayHello () {
			this.textContent = "Said it!"
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";

			document.getElementById("content").innerHTML = message;



			if (name === "student") {
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it!";
				document.querySelector("#title").textContent = title;
			}
		}

			// Unobstructive event binding
			document.querySelector("button").addEventListener("click", sayHello);



			document.querySelector("body").addEventListener("mousemove", function (event) {
				if(event.shiftKey === true)
				{
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY)

				}
							}
		);
	}		
);		
*/
document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelector("button").addEventListener("click", function (){

		$ajaxUtils.sendGetReq("/js/name.json", function (res) {
			var message = res.firstName + " " + res.lastName
			if (res.likeChineseFood) {
				message += " Likes Chinese Food";
			}
			else
			{
				message += " doesn't like Chinese food";
			}
			message += " and uses ";
			message += res.numberOfDisplays;
			message += " displays for coding."


			document.querySelector("#content").innerHTML = "<h2> " + message + " </h2>";
		});
	});
}
);

