import styles from '../styles/Home.module.css'
const createData = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Employee First Name
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-first-name"
                  type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 mb-3  px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Employee Last Name
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  type="text" placeholder="Doe" />
              </div>
              <div className="w-full md:w-1/2 mb-3  px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-imgUrl">
                  Image URL
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-imgUrl"
                  type="text" placeholder="https://......." />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail">
                  Email Address
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-mail"
                  type="text" placeholder="name@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
                  Phone Number
                </label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-number"
                  type="text" placeholder="+91 9999999999" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
                  Blood Group
                </label>
                <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  type="radio" id="A+" value="A+" name="bloodGroup"
                  required />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="A+">A+</label>&nbsp;&nbsp;
                <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  type="radio" id="B+" value="B+" name="bloodGroup"
                  required />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="B+">B+</label>&nbsp;&nbsp;
                <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  type="radio" id="O+" value="O+" name="bloodGroup"
                  required />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="O+">O+</label>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
                  Designation
                </label>
                <div class="flex items-center mb-2">
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="softwareEngineer" value="Software Engineer" name="designation"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="softwareEngineer">Software Engineer</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="consultant" value="Consultant" name="designation"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="consultant">Consultant</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="designer" value="Designer" name="designation"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="designer">Designer</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
                  Department
                </label>
                <div class="flex items-center mb-2">
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="it" value="Active" name="department"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="Active">IT</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="finance" value="Finance" name="department"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="finance">Finance</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="uiux" value="UI/UX" name="department"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="uiux">UI/UX</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
                  Status
                </label>
                <div class="flex items-center mb-2">
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="Active" value="Active" name="bloodGroup"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="Active">Active</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="Onboarding" value="Onboarding" name="bloodGroup"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="Onboarding">Onboarding</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="Newbie" value="Newbie" name="bloodGroup"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="Newbie">Awaiting</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">

                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
                  Blood Group
                </label>
                <div class="flex items-center mb-2">
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="senior" value="Senior" name="position"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="senior">Senior</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="junior" value="Junior" name="position"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="junior">Junior</label>&nbsp;&nbsp;
                  </div>
                  <div class="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="newbie" value="Newbie" name="position"
                      required />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="newbie">Newbie</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default createData