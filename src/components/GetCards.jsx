import React from 'react'

const GetCards = (props) => {

  const { data } = props
  const { dataCategories } = props

  const findCategoryById = (data, dataCategories) => {

    if (!data || !dataCategories) {
      return null;
    }

    const matchingCategory = dataCategories.find(category => category.id === data.category);
  
    return matchingCategory;
  };

  const category = findCategoryById(data, dataCategories);

  const headerStyle = {
    backgroundColor: category ? category.color : 'transparent',
  };
  const borderStyle = {
    borderColor: category ? category.color : 'transparent',
  };

  return (
    <div className='flex justify-between z-[2] w-[100%] max-[450px]:flex-col max-[450px]:justify-center'>
            <div className='inline-block w-[50%] font-roboto box-border pt-10 max-[450px]:w-full'>
              <h1 className='max-[450px]: max-[450px]:text-center max-[450px]:text-[40px] max-[450px]:  text-white text-[60px] box-bord inline-block p-[10px]' style={headerStyle}>{ data ? category.name : 'Alura Latam'}</h1>
              <h3 className='max-[450px]:w-[100%] max-[450px]:text-[26px] max-[450px]:mt-2 max-[450px]:  text-white text-[46px] box-border mt-10'>{ data ? data.title : 'Qué Significa Pensar Como Programador'}</h3>
              <p  className='max-[450px]:w-[100%] max-[450px]:text-justify max-[450px]: max-[450px]:  text-white text-[18px] font-light leading-5 text-justify box-border pr-10 mt-4'>{ data ? data.description : 'Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.' }</p>
            </div>
            <div className='w-[560px] h-[315px] mt-4 border-[4px] border-solid max-[450px]:w-[100%] max-[450px]:h-[200px] max-[450px]:flex max-[450px]:justify-center max-[450px]:items-center' style={borderStyle}>
            <iframe className='w-full h-full' src={data ? data.urlVideo : 'https://www.youtube.com/embed/ov7vA5HFe6w?si=KGfsId5hUyJS9bzg'} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
    </div>
  )
}

export default GetCards