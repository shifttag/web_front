{
  // User 인터페이스 정의, 사용자의 id, 이름, 사용자명, 이메일 정보를 포함합니다.
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  // User 배열을 나타내는 타입 별칭을 정의합니다.
  type Users = User[];

  // 비동기 함수로, 사용자 정보를 외부 API에서 가져와 프라미스로 반환합니다.
  const fetchUsers = async (): Promise<Users> => {
    try {
      // fetch 함수를 사용하여 API 호출을 진행합니다.
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // 응답이 성공적이지 않으면 에러를 발생시킵니다.
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // 응답 데이터를 JSON 형태로 변환합니다.
      const users: Users = await response.json();
      return users;
    } catch (error) {
      // 네트워크 요청에 실패했을 때 콘솔에 에러를 출력합니다.
      console.error("Fetch error:", error);
      return [];
    }
  };

  // 사용자 정보를 받아 HTML 엘리먼트를 생성하는 함수입니다.
  const createUserCard = (user: User): HTMLElement => {
    // div 엘리먼트를 생성하고 'user-card' 클래스를 추가합니다.
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    // 생성된 div에 HTML 내용을 삽입합니다.
    userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  `;
    return userCard;
  };

  // 사용자 정보 배열을 받아 화면에 표시하는 함수입니다.
  const displayUsers = (users: Users): void => {
    // 'user-list' ID를 가진 엘리먼트를 가져옵니다.
    const userList = document.getElementById("user-list");
    if (userList) {
      // userList 내용을 초기화합니다.
      userList.innerHTML = "";
      // 사용자 정보를 순회하며 각 사용자 카드를 생성하고 추가합니다.
      users.forEach((user) => {
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      });
    }
  };

  // 사용자 정보를 필터링하는 함수입니다.
  const filterUsers = (users: Users, query: string): Users => {
    return users.filter(
      (user) =>
        // 사용자의 이름, 사용자명, 이메일 중 하나라도 쿼리 문자열을 포함하면 해당 사용자를 반환합니다.
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  // 사용자 정보를 정렬하는 함수입니다.
  const sortUsers = (users: Users, key: "name" | "email"): Users => {
    // 지정된 키(name 또는 email)를 기준으로 사용자 정보를 정렬합니다.
    return [...users].sort((a, b) => a[key].localeCompare(b[key]));
  };

  // 이벤트 리스너를 추가하는 함수입니다.
  const addEventListeners = (users: Users): void => {
    // 'search-input'과 'sort-select' 엘리먼트를 가져옵니다.
    const searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    const sortSelect = document.getElementById(
      "sort-select"
    ) as HTMLSelectElement;

    // 검색 입력 필드에 입력 이벤트 리스너를 추가합니다.
    searchInput?.addEventListener("input", () => {
      const query = searchInput.value;
      const filteredUsers = filterUsers(users, query);
      const sortKey = sortSelect.value as "name" | "email";
      const sortedUsers = sortUsers(filteredUsers, sortKey);
      displayUsers(sortedUsers);
    });

    // 정렬 선택 필드에 변경 이벤트 리스너를 추가합니다.
    sortSelect?.addEventListener("change", () => {
      const query = searchInput.value;
      const filteredUsers = filterUsers(users, query);
      const sortKey = sortSelect.value as "name" | "email";
      const sortedUsers = sortUsers(filteredUsers, sortKey);
      displayUsers(sortedUsers);
    });
  };

  // 초기화 함수로, 사용자 데이터를 가져와 화면에 표시하고 이벤트 리스너를 설정합니다.
  const init = async (): Promise<void> => {
    const users = await fetchUsers();
    displayUsers(users);
    addEventListeners(users);
  };

  // 문서가 준비되면 init 함수를 호출합니다.
  document.addEventListener("DOMContentLoaded", init);
}
