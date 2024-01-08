import skills from '../content/skills'
import projects from '../content/projects'

function Newcom() {

    
    return (
        <>

            {
                projects.map((project) => (
                    project.stack.map((skil,index) => (
                        <div key={index}>
                            <img src={`/images/skills/${skil}`} alt='' />
                        </div>

                    ))
                ))


            }


            

            {
                skills.map((skill, index) => (

                    <div className="flex justify-center h-36 w-72 m-8 bg-red-300 p-4 rounded-lg  shadows" key={index}>
                        <img src={`/images/skills/${skill}`} alt="" className="w-24 hover:scale-125 transition ease-in-out duration-300" />
                    </div>


                )

                )
            }
        </>
    )
}

export default Newcom