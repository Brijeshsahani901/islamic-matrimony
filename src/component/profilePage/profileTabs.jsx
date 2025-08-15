import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = ['Personal', 'Preferences', 'Career', 'Privacy']

  return (
    <div className="w-full  mx-auto mt-6">
      <Tab.Group
        selectedIndex={tabs.indexOf(activeTab)}
        onChange={(index) => setActiveTab(tabs[index])}
      >
        <Tab.List className="flex space-x-2 bg-gray-100 rounded-xl p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium active:border-gray-400 leading-5 rounded-lg transition-all duration-300',
                  selected
                    ? 'bg-white text-black shadow-sm border-none'
                    : 'text-gray-500 hover:text-black'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
