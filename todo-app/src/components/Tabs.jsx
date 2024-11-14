export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props

    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ?
                    todos.length :
                    tab === 'Open' ?
                        todos.filter(val => !val.complete).
                        length : 
                        todos.filter(val => val.complete).length

                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex}
                    // class is a reserved word in react so have to use className unlike plain html which is just class
                    className={"tab-button " + (tab === selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}