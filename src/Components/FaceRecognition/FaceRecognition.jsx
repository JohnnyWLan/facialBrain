

// eslint-disable-next-line react/prop-types
const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                {imageUrl} ? (
                    <img alt='Detected face' src={imageUrl} width='500px' height='auto' />
                ) : (
                    <p>No image to display</p>
                )
            </div>
        </div>
    );
}

export default FaceRecognition;
