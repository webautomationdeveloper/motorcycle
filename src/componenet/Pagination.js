
const Pagination = ({postPerPage,totalPosts,paginate}) =>{
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i);
    }
    
    return (
        
        <nav>
                <ul className="pagination text-white">
                    {pageNumbers.map(number =>{
                        return(

                            <li key={number} className="page-item">
                            <a href="!#" className="page-link" onClick={()=>{paginate(number)}}>
                                {number}
                            </a>
                        </li>
                               )
                    })}
                </ul>
        </nav>
    )

}

export default  Pagination;