const API = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todoUrl = "todos";

	const getTodos = () =>
		fetch([baseUrl, todoUrl].join("/")).then((response) =>
			response.json()
		);

	return {
		getTodos,
	};
})();

// * ~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		inputBox: ".todolist-input",
		listContainer: "todolist-container",
	};

	const createTmp = (todoArr) => {
		let tmp = "";
		todoArr.forEach((todo) => {
			tmp += `
        	<li>
						<span>${todo.title}</span>
						<button>X</button>
					</li>
      `;
		});
		return tmp;
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};

	return { domstr, render, createTmp };
})();

// * ~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~
const Model = ((api) => {
	return {
		...api,
	};
})(API);

// * ~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
  // querySelector: Nodelist vs. getElementById: HTMLCollection
  const todoContainer = document.querySelectorAll(`.${view.domstr.listContainer}`)[0];
  // const todoContainer = document.getElementsByClassName(view.domstr.listContainer)[0];
  
	const init = () => {
		model.getTodos().then((todolist) => {
			const tmp = view.createTmp(todolist);
      view.render(todoContainer, tmp);
		});
	};

	return { init };
})(Model, View);

Controller.init();
