import { features } from 'constants/features'

export const FeaturesSection = () => {
  return (
    <section className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map(({ id, icon, title, description }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center rounded-lg border p-6"
        >
          <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary  text-4xl">
            <img src={icon} alt={title} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      ))}
    </section>
  )
}
