import React,{useState,useEffect} from 'react'
import './workoutPage.css'
const ShoulderExcercise = () => {
    const [workout, setWorkout] = useState(null);


    const getworkout = async () => {
        let data = {
            type: 'Shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Laterals Rise', 
                    videoUrl: 'https://gymvisual.com/img/p/5/6/9/0/5690.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'In shoulders excercise, keep your back straight and lift the weights with your shoulders'
                },
                {
                    exercise: 'Front Raise',
                    videoUrl: 'https://gymvisual.com/img/p/5/6/9/1/5691.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'In shoulders excercise, keep your back straight and lift the weights with your shoulders'

                },
                {
                    exercise: 'Reverse Flyes',
                    videoUrl: 'https://gymvisual.com/img/p/5/7/0/6/5706.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'In shoulders excercise, keep your back straight and lift the weights with your shoulders'

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

export default ShoulderExcercise