module.exports = {
    sum: (a, b) => a + b,
    sortable: (filed, sort) => {
        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-sort-down',
            desc: 'fa-solid fa-sort-up',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const sortType = filed === sort.column ? sort.type : 'default';

        const type = types[sortType];
        const icon = icons[sortType];

        return `<a href="?_sort&column=${filed}&type=${type}">
                        <span class='${icon}'></span>
                    </a>`
    }
}