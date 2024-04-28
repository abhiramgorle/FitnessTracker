import React,{useState,useEffect} from 'react'
import './workoutPage.css'
const BackExcercise = () => {
    const [workout, setWorkout] = useState(null);


    const getworkout = async () => {
        let data = {
            type: 'Back',
            imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Pull UP', 
                    videoUrl: 'https://gymvisual.com/img/p/1/3/1/4/2/13142.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'In Back excercises, always keep your back straight and try to activate your back muscles'
                },
                {
                    exercise: 'Pull down',
                    videoUrl: 'https://gymvisual.com/img/p/4/7/3/8/4738.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'In Back excercises, always keep your back straight and try to activate your back muscles'

                },
                {
                    exercise: 'Standing Low Row',
                    videoUrl: 'https://gymvisual.com/img/p/5/7/0/1/5701.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'In Back excercises, always keep your back straight and try to activate your back muscles'

                }
            ]
        }

        setWorkout(data)
    }

    useEffect(() => {
        getworkout()
    }, [])
    return (
        <div className='workout'>
            <h1 className='mainhead1'> {workout?.type} Day</h1>
            <div className='workout__exercises'>
                {
                    workout?.exercises.map((item, index)=>{
                        return (
                            <div className={
                                index % 2 === 0 ? 'workout__exercise' : 'workout__exercise'
                            }>
                                <h3>{index+1}</h3>
                                <div className='workout__exercise__image'>
                                    <img src={item.videoUrl} alt="" />
                                </div>
                                <div className='workout__exercise__content'>
                                    <h2>{item.exercise}</h2>
                                    <span>{item.sets} sets X {item.reps} reps</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BackExcercise