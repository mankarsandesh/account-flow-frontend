import Layout from "../layout/default";
import { BuildingOfficeIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Datatable from "../components/datatable";

function Category() {
  return (
    <>
      <Layout>
        <main className="flex-1 pb-8">

          <div className="px-4 sm:px-6 lg:px-8 mt-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex mb-8 mt-8">
              <div className="w-[85%] ">
                <h1 className="text-base font-semibold text-gray-900">Category</h1>
                <p className="mt-2 text-sm text-gray-700">
                  A list of all the users in your account including their name,
                  title, email and role.
                </p>
              </div>
              <div className="mt-4 sm:ml-12 sm:mt-0 sm:flex-1 w-[15%]">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add category
                </button>
              </div>
            </div>

            <Datatable />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Category;
