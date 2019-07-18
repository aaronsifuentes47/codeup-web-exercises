const wait = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('ding! promise is done!');
        }, input)
    });
};
const getUsernames = (name) => {
    return fetch('https://api.github.com/users/:username/events', {headers: {'Authorization': 'token' + gitToken}})
        .then(response => response.json())
        // .then(users => users.map(user => user.login));
};
console.log(getUsernames());

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));