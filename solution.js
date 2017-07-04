const data = [
	{
		title: "Одежда",
		left: 1,
		right: 22
	},
	{
		title: "Мужская",
		left: 2,
		right: 9
	},
	{
		title: "Женская",
		left: 10,
		right: 21
	},
	{
		title: "Костюмы",
		left: 3,
		right: 8
	},
	{
		title: "Платья",
		left: 11,
		right: 16
	},
	{
		title: "Юбки",
		left: 17,
		right: 18
	},
	{
		title: "Блузы",
		left: 19,
		right: 20
	},
	{
		title: "Брюки",
		left: 4,
		right: 5
	},
	{
		title: "Жакеты",
		left: 6,
		right: 7
	},
	{
		title: "Вечерние",
		left: 12,
		right: 13
	},
	{
		title: "Летние",
		left: 14,
		right: 15
	}
];

function drawNestedSetsTree(data, node) {
	// Удалите весь код ниже и замените его на свою реализацию

	function getRoot() {
		let firstRoot = {};
		let rootIndex = 0;

		data.forEach((item) => {
			if (item.right > rootIndex) {
				rootIndex = item.right;
				firstRoot = item;
			}
		});
		return firstRoot;
	}

	function createTree(element) {
		let leftIndex = element.left;

		return data.reduce((root, item) => {

			if (item.left === leftIndex + 1) {

				if (!root.childrens) {
					root.childrens = [];
				}

				root.childrens.push(item);
				leftIndex = item.right;
				createTree(item)
			}

			return root;

		}, element);
	}

	const tree = createTree(getRoot());

	function render(tree, node) {
		const ul = document.createElement('ul');

		function reduceTree(tree) {
			const ul = document.createElement('ul');
			const li = document.createElement('li');

			li.textContent = tree.title;
			ul.appendChild(li);
			return ul;
		}

		ul.appendChild(reduceTree(tree));
		node.appendChild(ul);
	}

	render(tree, node);
}

drawNestedSetsTree(data, document.querySelector('.demo'));


if (typeof module !== 'undefined') {
	module.exports = drawNestedSetsTree;
}