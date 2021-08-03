import axios from "axios";
axios
	.get("http://123.207.32.32:8000/home/multidata", {
		data: {
			name: "yingcai",
			age: 26
		}
	})
	.then((res) => {
		console.log("原生axios请求");
		console.log(res);
	})
	.catch((err) => {
		console.log(err);

		return err;
	});
