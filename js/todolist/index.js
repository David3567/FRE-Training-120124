const API = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todoUrl = "todos";

	const getTodos = () =>
		fetch([baseUrl, todoUrl].join("/")).then((response) =>
			response.json()
		);

	const deleteTodo = (id) =>
		fetch([baseUrl, todoUrl, id].join("/")).then((response) =>
			response.json()
		);

	return {
		getTodos,
		deleteTodo,
	};
})();

// * ~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		inputBox: "todolist-input",
		listContainer: "todolist-container",
		deleteBtn: "delete-btn",
	};

	const createTmp = (todoArr) => {
		let tmp = "";
		todoArr.forEach((todo) => {
			tmp += `
        	<li>
						<span>${todo.id}-${todo.title}</span>
						<button class='delete-btn' id='${todo.id}'>X</button>
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
const Model = ((api, view) => {
	class State {
		#todolist = [];
		#todoContainer = document.querySelector(
			`.${view.domstr.listContainer}`
		);
		// querySelector: Nodelist vs. getElementById: HTMLCollection
		// const todoContainer = document.getElementsByClassName(view.domstr.listContainer)[0];

		get todolist() {
			return this.#todolist;
		}

		set todolist(newtodolist) {
			this.#todolist = [...newtodolist];

			const tmp = view.createTmp(this.#todolist);
			view.render(this.#todoContainer, tmp);
		}
	}

	return {
		...api,
		State,
	};
})(API, View);

// * ~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
	const state = new model.State();
	const todoContainer = document.querySelector(
		`.${view.domstr.listContainer}`
	);

	const deleteTodo = () => {
		todoContainer.addEventListener("click", (e) => {
			if (e.target.className === view.domstr.deleteBtn) {
				state.todolist = state.todolist.filter(
					(todo) => +todo.id !== +e.target.id
				);
        model.deleteTodo(e.target.id);
			}
		});
	};

	const init = () => {
		model.getTodos().then((todolist) => {
			state.todolist = todolist;
		});
	};

  const bootstrap = () => {
    init();
    deleteTodo();
  }

	return { bootstrap };
})(Model, View);

Controller.bootstrap();
