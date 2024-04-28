import React,{useState,useEffect} from 'react'
import './workoutPage.css'
const AbsExcercise = () => {
    const [workout, setWorkout] = useState(null);


    const getworkout = async () => {
        let data = {
            type: 'Abs',
            imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Sit up',
                    videoUrl: 'https://gymvisual.com/img/p/1/1/6/3/8/11638.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Try to touch your knees with your elbows in every rep and activate your abs'
                },
                {
                    exercise: '45 degree Bycicle Twisting Crunch',
                    videoUrl: 'https://gymvisual.com/img/p/2/1/9/3/9/21939.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Try to touch your knees with your elbows in every rep and activate your abs'

                },
                {
                    exercise: 'Alternate Heel Touchers',
                    videoUrl: 'https://gymvisual.com/img/p/1/4/6/6/0/14660.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Try to touch your knees with your elbows in every rep and activate your abs'

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

export default AbsExcercise