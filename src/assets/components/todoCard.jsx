

export const TodoCard = ({title, desc}) => {
     return(
        <><em></em>
            <div className="flex items-center justify-around  w-[90%] h-24 text-lg">
                <p>{title}</p>
                <p>{desc}</p>
                <button className="w-48 h-12 rounded-2xl bg-red-400 ">Delete</button>
            </div>
        </>
     )
}