async function fetchUsers() {
    const response = await fetch('users.json');
    if (response.ok) {
        const json = await response.json();
        if(!json.length) {
           // throw new Error('no data found');
           throw new NoDataError('no data found');
        } 
        return json;
    }
}

// カスタムエラー
class NoDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoDataError';
    }
}

async function init() {
    try {
        const users = await fetchUsers();
        for (const user of users) {
            console.log(`I'm ${user.name}, ${user.age} years old`);
        }
    } catch(e) {
        // 例外処理の中で条件分岐をするときにカスタムエラーを作る
        if(e instanceof NoDataError) {
            // NoDataErrorのときのエラー処理をする
            console.error(e);
        } else {
            console.error('Oops, sometheng went wrong');
        }
        console.error(e);
    } finally {
        console.log('bye');
    }
    // throw でエラーが投げられた場合は、 try catch finally を書かないと
    // finally 後の処理は実行されない
    console.log('end');
}
init();