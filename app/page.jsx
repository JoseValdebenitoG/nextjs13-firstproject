import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data
}

// react server component
async function IndexPage() {
  const users = await fetchUsers();
  console.log(users);

  return <Users users={users}/>
}

export default IndexPage