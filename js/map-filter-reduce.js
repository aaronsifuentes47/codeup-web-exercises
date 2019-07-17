const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userLangs = users.filter(user => user.languages.length > 2);
console.log(userLangs);

const emails = users.map(user => user.email);
console.log(emails);


const sumYears = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
}, 0);
console.log(sumYears);
console.log(sumYears/users.length);

let longest = users.reduce(function (a, b) { return a.email.length > b.email.length ? a : b; });
console.log(longest.email);

const allNames = users.reduce((names, user,index) => {
    if (index === users.length - 1) {
        return `${names} ${user.name}.`
    } else {
        return `${names} ${user.name},`
    }
}, 'your instructors names are: ');

console.log(allNames);

const unique = new Set();

