const wait = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('ding! promise is done!');
        }, input)
    });
};
// const getUsernames = () => {
//     return fetch('https://api.github.com/users', {'headers': {'Authorization': 'token ' + gitToken}})
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
// };
//
// getUsernames().then((usernames) =>{
//     for (let username of usernames) {
//         // console.log(username);
//         fetch(`https://api.github.com/users/${username}/events`, {'headers': {'Authorization': 'token ' + gitToken}})
//             .then(response => response.json())
//             .then(info => console.log(info[0].created_at))
//     }
// });

const getLastPush = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {'headers': {'Authorization': 'token ' + gitToken}})
        .then(response => response.json())
        .then(events => {
            for (let event of events) {
                if (event.type === 'PushEvent') {
                    console.log(`${event.type} at ${event.created_at}`);
                    break;
                }
            }
        })
};

getLastPush('aaronsifuentes47');



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));