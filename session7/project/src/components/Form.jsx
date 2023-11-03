import {useForm} from 'react-hook-form'
export default function Form() {
    let {register,handleSubmit} = useForm()
  return (
    <>
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder="email" {...register('email')}/>
            <input type="password" placeholder="password" {...register('password')}/>
            <input type="submit" />
        </form>
    </>
  )

  function login(res){
    console.log(res)
  }
}
