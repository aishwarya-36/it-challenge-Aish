import { WeekRow } from "./WeekRow";

import Stack from "@mui/material/Stack";
import FilterButton from "./FilterButton";
import WeekSelect from "./WeekSelect";
import DataTable from "./DataTable";

function App() {
  return (
    <div className="flex-col flex items-center justify-center">
      <div className="border m-4 shadow-lg md:w-[80%] lg:w-[40%]">
        <h1 className="text-center font-bold pt-5 text-xl">
          My Availability for the next 7 weeks
        </h1>
        <WeekRow id={1} />
        <WeekRow id={2} />
        <WeekRow id={3} />
        <WeekRow id={4} />
        <WeekRow id={5} />
        <WeekRow id={6} />
        <WeekRow id={7} />
      </div>
      <div className="border m-4 p-5 shadow-lg md:w-[80%] lg:w-[40%]">
        <h1 className="text-center font-bold text-xl mb-5">Best Friends</h1>

        <ul class="flex gap-2 ">
          <li>
            <input
              type="radio"
              id="fun"
              name="type"
              value="fun"
              class="hidden peer"
              required
            />
            <label
              for="fun"
              class="inline-flex items-center justify-between py-2 px-5 bg-white border border-gray rounded-lg cursor-pointer border-gray-70 text-[#4e39f9] peer-checked:text-white  peer-checked:bg-[#271d7d] hover:bg-gray-100 "
            >
              <div class="block">
                <div>Just for fun</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="serious"
              name="type"
              value="serious"
              class="hidden peer"
            />
            <label
              for="serious"
              class="inline-flex items-center justify-between py-2 px-5 bg-white border border-gray rounded-lg cursor-pointer border-gray-70 text-[#4e39f9] peer-checked:text-white  peer-checked:bg-[#271d7d] hover:bg-gray-100 "
            >
              <div class="block">
                <div>More Serious</div>
              </div>
            </label>
          </li>
        </ul>

        <ul class="flex gap-2 my-2 ">
          <li>
            <input
              type="radio"
              id="all"
              name="weeks"
              value="all"
              class="hidden peer"
              required
            />
            <label
              for="all"
              class="inline-flex items-center justify-between py-2 px-5 bg-white border border-gray rounded-lg cursor-pointer border-gray-70 text-[#4e39f9] peer-checked:text-white  peer-checked:bg-[#271d7d] hover:bg-gray-100 "
            >
              <div class="block">
                <div>All</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="thisWeek"
              name="weeks"
              value="thisWeek"
              class="hidden peer"
            />
            <label
              for="thisWeek"
              class="inline-flex items-center justify-between py-2 px-5 bg-white border border-gray rounded-lg cursor-pointer border-gray-70 text-[#4e39f9] peer-checked:text-white  peer-checked:bg-[#271d7d] hover:bg-gray-100 "
            >
              <div class="block">
                <div>This Week</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="nextWeek"
              name="weeks"
              value="nextWeek"
              class="hidden peer"
            />
            <label
              for="nextWeek"
              class="inline-flex items-center justify-between py-2 px-5 bg-white border border-gray rounded-lg cursor-pointer border-gray-70 text-[#4e39f9] peer-checked:text-white  peer-checked:bg-[#271d7d] hover:bg-gray-100 "
            >
              <div class="block">
                <div>Next Week</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="bestWeek"
              name="weeks"
              value="bestWeek"
              class="hidden peer"
            />
            <label
              for="bestWeek"
              class="inline-flex items-center justify-between py-2 px-5 bg-white border border-gray rounded-lg cursor-pointer border-gray-70 text-[#4e39f9] peer-checked:text-white  peer-checked:bg-[#271d7d] hover:bg-gray-100 "
            >
              <div class="block">
                <div>Best Week</div>
              </div>
            </label>
          </li>
          <li>
            <WeekSelect />
          </li>
        </ul>

        <DataTable />
      </div>
    </div>
  );
}

export default App;
