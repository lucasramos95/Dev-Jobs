// import { allJobs } from './data.js';

const ItemResult = ({ data, addedFilters }) => {

    return ( 
        <div className="results-item">
            { data.map((job) => {
                return (
                    <div className="job" key={ job.id }>
                        <img className="logo" src={ job.logo } alt="company logo"/>
                        <div className="info-wrapper">
                        <div className="job-info">
                            <div className="company">
                                <span className="company-title">{ job.company }</span>
                                { job.new && <span className="company-new flags">new!</span> }
                                { job.featured && <span className="company-featured flags">featured</span> }
                            </div>
                            <h3 className="position">{ job.position }</h3>
                            <div className="additional-info">
                                <span>{ job.postedAt }</span>
                                <span>{ job.contract }</span>
                                <span>{ job.location }</span>
                            </div>
                        </div>
                        <div className="filters">
                            <button className="button-filter" 
                                value={ job.role }
                                onClick={(e) => addedFilters(e.target.value)}>
                                    { job.role }
                                </button>
                            <button className="button-filter" 
                                value={ job.level }
                                onClick={(e) => addedFilters(e.target.value)}>
                                    { job.level }
                                </button>
                            { job.languages.map(language => {
                                return (
                                    <button className="button-filter" 
                                        key={ language } 
                                        value={ language }
                                        onClick={(e) => addedFilters(e.target.value)}>
                                            { language }
                                    </button>
                                )
                            })     
                            }
                            { job.tools.map(tool => {
                                return (
                                    <button className="button-filter" 
                                        key={ tool } 
                                        value={ tool }
                                        onClick={(e) => addedFilters(e.target.value)}>
                                            { tool }
                                    </button>
                                )
                            })     
                            }
                        </div>
                        </div>
                        
                    </div>
                )
            }) }
        </div>
     );
}
 
export default ItemResult;