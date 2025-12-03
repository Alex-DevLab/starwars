const NavItem = ({itemTitle, changePage}) => {
    return (
        <div
            onClick={() => changePage(itemTitle)}
            className="bg-red border-1 px-3 rounded-md cursor-pointer hover:bg-red-500 hover:text-white">{itemTitle}</div>
    )
}

export default NavItem;