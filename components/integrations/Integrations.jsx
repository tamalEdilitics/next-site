"use client";

import { DATABASETYPES } from "@/lib/static/IntegrationConfig";
import SelectMenuOption from "@/lib/utils/select/SelectMenuOption";
import { selectStyles } from "@/lib/utils/select/SelectStyles";
import { selectThemes } from "@/lib/utils/select/SelectThemes";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Select from "react-select";
import {
  IntegrationFilters,
  typeFilters,
} from "../../lib/static/IntegrationFilters";
import IntegrationCard from "./IntegrationCard";

const Integrations = () => {
  const [allIntegrations, setAllIntegrations] = useState(DATABASETYPES);
  const [filteredIntegrationCards, setFilteredIntegrationCards] =
    useState(DATABASETYPES);
  const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState(IntegrationFilters[0]);
  const [type, setType] = useState(typeFilters[0]);

  const handleOnClick = (e) => {
    setFilter(IntegrationFilters.find((item) => item.value === e.value));

    if (e.value === "All Integrations") {
      setAllIntegrations(DATABASETYPES);
      setFilteredIntegrationCards(DATABASETYPES);
    } else {
      setAllIntegrations(
        DATABASETYPES.filter((item) => item.filter.includes(e.value))
      );
      setFilteredIntegrationCards(
        DATABASETYPES.filter((item) => item.filter.includes(e.value))
      );
    }
  };

  const sourceDatabases = DATABASETYPES.filter((e) => {
    return (
      e.pipeline.cdc.source ||
      e.pipeline.full.source ||
      e.pipeline.incremental.source
    );
  });

  const destinationDatabases = DATABASETYPES.filter((e) => {
    return (
      e.pipeline.cdc.destination &&
      e.pipeline.full.destination &&
      e.pipeline.incremental.destination
    );
  });

  const handleChangeType = (e) => {
    setType(typeFilters.find((item) => item.value === e.value));

    if (e.value === "All") {
      setFilteredIntegrationCards(allIntegrations);
    } else if (e?.value === "Sources") {
      setFilteredIntegrationCards(sourceDatabases);
    } else {
      setFilteredIntegrationCards(destinationDatabases);
    }
  };

  useEffect(() => {
    let filteredData = {};
    filteredData = allIntegrations?.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredIntegrationCards(filteredData);
  }, [searchQuery]);

  return (
    <div className="min-h-screen  flex flex-col w-full   pt-3 " id="blurrable">
      <div className="flex flex-col w-full justify-between mt-[1rem] gap-[2rem] max-w-screen-xl mx-auto md:p-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="mb-2 md:flex hidden space-x-1 text-sm mt-2 w-[250px]">
            <input
              type="text"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="split-input flex h-9 w-full cursor-text bg-backgroundSecondary items-center overflow-hidden rounded-l-lg border-0  py-1.5 pl-3 pr-1 text-sm text-defaultIconColor shadow-md focus:border-none  focus:shadow-primary active:ring-0 active:border-0 focus:ring-0 outline-none"
              placeholder="Search..."
              value={searchQuery}
            />

            <div className="flex h-9 items-center justify-center bg-backgroundSecondary  rounded-r-lg px-2.5 py-1.5  shadow-md">
              <FiSearch className="text-lg text-icon " />
            </div>
          </div>

          <div className=" flex md:flex-row flex-col  md:gap-[2rem] gap-[1rem] md:items-end items-center md:w-auto w-full">
            <Select
              components={{ Option: SelectMenuOption }}
              classNamePrefix="select"
              theme={selectThemes.theme}
              styles={selectStyles}
              name={"Compute"}
              isSearchable={false}
              isClearable={false}
              className="basic-single   text-sm bg-backgroundSecondary  rounded-md md:w-[250px] w-[300px]"
              options={IntegrationFilters}
              value={filter}
              onChange={(e) => handleOnClick(e)}
            />

            <Select
              components={{ Option: SelectMenuOption }}
              classNamePrefix="select"
              theme={selectThemes.theme}
              styles={selectStyles}
              name={"Compute"}
              isSearchable={false}
              isClearable={false}
              className="basic-single text-sm bg-backgroundSecondary rounded-md md:w-[250px] w-[300px] md:block hidden"
              options={typeFilters}
              value={type}
              onChange={(e) => {
                handleChangeType(e);
              }}
            />
          </div>
        </div>

        <div
          className={clsx(
            "grid md:grid-cols-3 w-full gap-4 integration-add-container overflow-y-scroll blurrable md:px-0 px-7 "
          )}
        >
          {filteredIntegrationCards
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((object) => {
              return (
                <div
                  key={object?.title}
                  onClick={() => {
                    setOpen(true);
                    setCurrentCard(object);
                  }}
                >
                  <IntegrationCard
                    title={object?.title}
                    category={object?.category}
                    image={object?.image}
                    url={object?.url}
                    transformation={object?.transformation}
                    comingSoon={object?.comingSoon}
                    desc={object?.desc}
                    db_type={object?.type}
                    db_subtype={object?.db_subtype}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
