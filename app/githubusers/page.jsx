import Link from 'next/link';

async function fetchGithubUsers() {
    const res = await fetch('http://api.github.com/search/users?q=ptmartins').then(data => data.json());
    return res.items;
}

export default async function GithubUsers() {
    const users = await fetchGithubUsers();

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Repos</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.avatar_url} alt="" srcset="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold"> {user.login} </div>
                                        <div className="text-sm opacity-50">{user.id}</div>
                                    </div>
                                </div>
                            </td>   
                            <td>
                                <Link href={user.html_url} className="btn btn-link"> View on Github </Link>
                            </td>
                            <th><Link href={`/githubusers/${user.login}`}>Go to repos</Link></th>
                        </tr>   
                    ))}
                </tbody>                
            </table>
        </div>
    );
}