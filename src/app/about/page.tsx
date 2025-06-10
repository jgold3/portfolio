import { Metadata } from "next";

type TimelineItemProps = {
  year: string;
  title: string;
  children: React.ReactNode;
};

function TimelineItem({ year, title, children }: TimelineItemProps) {
  return (
    <div className="flex w-full flex-col font-primary tracking-wide text-balance text-primary">
      <div className="mb-3 flex justify-between tracking-wide">
        <h2 className="font-primary text-2xl font-semibold">{title}</h2>
        <h2 className="font-primary text-2xl font-semibold">{year}</h2>
      </div>
      <div className="tracking-wide text-balance">{children}</div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About | Josh Goldsmith",
  description: "A timeline of Josh Goldsmith's life",
};

export default function AboutPage() {
  return (
    <div className="my-10 flex h-full w-full px-5 sm:px-16">
      <div className="relative mr-6">
        <div className="absolute top-0 left-1/2 h-full w-[2px] bg-primary"></div>
      </div>
      <div className="flex flex-grow flex-col space-y-20">
        <TimelineItem year="2013" title="My first taste of programming 👨🏼‍💻">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam dolores fugiat ullam praesentium
          minus necessitatibus autem assumenda vel laborum consequuntur, sit quaerat veniam quasi, laboriosam commodi
          eos non voluptates! Magnam esse repudiandae reiciendis incidunt, earum culpa error ipsa porro ipsum veritatis
          dolor consequatur, maiores commodi expedita, soluta ullam. Obcaecati quis eveniet consectetur iure excepturi
          autem rerum harum exercitationem tempora. Optio accusamus vitae beatae eius, maxime non fuga exercitationem ad
          libero. Sed doloribus, hic modi neque officia ex laborum exercitationem totam? Corporis quaerat, blanditiis
          libero magni maiores repellendus harum est. Ipsam soluta dicta exercitationem, ullam consequuntur quis totam
          accusamus nesciunt commodi doloribus perferendis, numquam ipsum tempora. Vitae, optio doloremque? At nihil rem
          excepturi commodi reprehenderit quae dignissimos nostrum neque laboriosam! Nesciunt nobis sapiente quam
          molestias tempore aliquam voluptates a cum debitis, molestiae, corporis vero fugit quaerat repellendus in
          laudantium architecto eos, eligendi voluptas! Magni doloremque repudiandae tenetur voluptate. Eveniet, alias?
          Aliquid aspernatur sapiente dolorum minus, nulla accusantium laudantium. Asperiores harum laboriosam,
          assumenda, esse quaerat eaque saepe consectetur qui distinctio, accusantium iusto! Quae, incidunt consequuntur
          nihil illum repellendus commodi molestiae enim. Quaerat voluptatum maxime soluta veniam eaque assumenda magni
          facilis! Odit natus ipsam doloremque alias quae est et, enim quod? Eaque maiores, consequuntur quibusdam totam
          dolor ipsam suscipit quasi. Minus, quibusdam! Tenetur fuga repellat distinctio esse dolores, aliquid autem
          alias, ducimus enim nobis ea sed illo saepe neque quas placeat odio quibusdam unde hic recusandae, eaque
          mollitia. Tempora modi dolor est? Nemo deserunt repudiandae dicta commodi ducimus facilis doloremque veritatis
          quae, iure sunt, porro odit maiores beatae! Odit, rerum earum repellat minus inventore iure, debitis dolorem,
          quae distinctio impedit odio non. Autem temporibus praesentium et in architecto qui suscipit quisquam ipsa
          quod, voluptates nam, ab placeat voluptas quas! Expedita consequatur, necessitatibus sed accusamus laudantium
          aperiam quod. Porro beatae incidunt eos dolore.
        </TimelineItem>
        <TimelineItem year="2016" title="Going to college 🏫">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam dolores fugiat ullam praesentium
          minus necessitatibus autem assumenda vel laborum consequuntur, sit quaerat veniam quasi, laboriosam commodi
          eos non voluptates! Magnam esse repudiandae reiciendis incidunt, earum culpa error ipsa porro ipsum veritatis
          dolor consequatur, maiores commodi expedita, soluta ullam. Obcaecati quis eveniet consectetur iure excepturi
          autem rerum harum exercitationem tempora. Optio accusamus vitae beatae eius, maxime non fuga exercitationem ad
          libero. Sed doloribus, hic modi neque officia ex laborum exercitationem totam? Corporis quaerat, blanditiis
          libero magni maiores repellendus harum est. Ipsam soluta dicta exercitationem, ullam consequuntur quis totam
          accusamus nesciunt commodi doloribus perferendis, numquam ipsum tempora. Vitae, optio doloremque? At nihil rem
          excepturi commodi reprehenderit quae dignissimos nostrum neque laboriosam! Nesciunt nobis sapiente quam
          molestias tempore aliquam voluptates a cum debitis, molestiae, corporis vero fugit quaerat repellendus in
          laudantium architecto eos, eligendi voluptas! Magni doloremque repudiandae tenetur voluptate. Eveniet, alias?
          Aliquid aspernatur sapiente dolorum minus, nulla accusantium laudantium. Asperiores harum laboriosam,
          assumenda, esse quaerat eaque saepe consectetur qui distinctio, accusantium iusto! Quae, incidunt consequuntur
          nihil illum repellendus commodi molestiae enim. Quaerat voluptatum maxime soluta veniam eaque assumenda magni
          facilis! Odit natus ipsam doloremque alias quae est et, enim quod? Eaque maiores, consequuntur quibusdam totam
          dolor ipsam suscipit quasi. Minus, quibusdam! Tenetur fuga repellat distinctio esse dolores, aliquid autem
          alias, ducimus enim nobis ea sed illo saepe neque quas placeat odio quibusdam unde hic recusandae, eaque
          mollitia. Tempora modi dolor est? Nemo deserunt repudiandae dicta commodi ducimus facilis doloremque veritatis
          quae, iure sunt, porro odit maiores beatae! Odit, rerum earum repellat minus inventore iure, debitis dolorem,
          quae distinctio impedit odio non. Autem temporibus praesentium et in architecto qui suscipit quisquam ipsa
          quod, voluptates nam, ab placeat voluptas quas! Expedita consequatur, necessitatibus sed accusamus laudantium
          aperiam quod. Porro beatae incidunt eos dolore.
        </TimelineItem>
        <TimelineItem year="2016 - 2021" title="Getting a degree in CS 🎓">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam dolores fugiat ullam praesentium
          minus necessitatibus autem assumenda vel laborum consequuntur, sit quaerat veniam quasi, laboriosam commodi
          eos non voluptates! Magnam esse repudiandae reiciendis incidunt, earum culpa error ipsa porro ipsum veritatis
          dolor consequatur, maiores commodi expedita, soluta ullam. Obcaecati quis eveniet consectetur iure excepturi
          autem rerum harum exercitationem tempora. Optio accusamus vitae beatae eius, maxime non fuga exercitationem ad
          libero. Sed doloribus, hic modi neque officia ex laborum exercitationem totam? Corporis quaerat, blanditiis
          libero magni maiores repellendus harum est. Ipsam soluta dicta exercitationem, ullam consequuntur quis totam
          accusamus nesciunt commodi doloribus perferendis, numquam ipsum tempora. Vitae, optio doloremque? At nihil rem
          excepturi commodi reprehenderit quae dignissimos nostrum neque laboriosam! Nesciunt nobis sapiente quam
          molestias tempore aliquam voluptates a cum debitis, molestiae, corporis vero fugit quaerat repellendus in
          laudantium architecto eos, eligendi voluptas! Magni doloremque repudiandae tenetur voluptate. Eveniet, alias?
          Aliquid aspernatur sapiente dolorum minus, nulla accusantium laudantium. Asperiores harum laboriosam,
          assumenda, esse quaerat eaque saepe consectetur qui distinctio, accusantium iusto! Quae, incidunt consequuntur
          nihil illum repellendus commodi molestiae enim. Quaerat voluptatum maxime soluta veniam eaque assumenda magni
          facilis! Odit natus ipsam doloremque alias quae est et, enim quod? Eaque maiores, consequuntur quibusdam totam
          dolor ipsam suscipit quasi. Minus, quibusdam! Tenetur fuga repellat distinctio esse dolores, aliquid autem
          alias, ducimus enim nobis ea sed illo saepe neque quas placeat odio quibusdam unde hic recusandae, eaque
          mollitia. Tempora modi dolor est? Nemo deserunt repudiandae dicta commodi ducimus facilis doloremque veritatis
          quae, iure sunt, porro odit maiores beatae! Odit, rerum earum repellat minus inventore iure, debitis dolorem,
          quae distinctio impedit odio non. Autem temporibus praesentium et in architecto qui suscipit quisquam ipsa
          quod, voluptates nam, ab placeat voluptas quas! Expedita consequatur, necessitatibus sed accusamus laudantium
          aperiam quod. Porro beatae incidunt eos dolore.
        </TimelineItem>
        <TimelineItem year="Jan. 2022" title="My first job — Interclypse 💼">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam dolores fugiat ullam praesentium
          minus necessitatibus autem assumenda vel laborum consequuntur, sit quaerat veniam quasi, laboriosam commodi
          eos non voluptates! Magnam esse repudiandae reiciendis incidunt, earum culpa error ipsa porro ipsum veritatis
          dolor consequatur, maiores commodi expedita, soluta ullam. Obcaecati quis eveniet consectetur iure excepturi
          autem rerum harum exercitationem tempora. Optio accusamus vitae beatae eius, maxime non fuga exercitationem ad
          libero. Sed doloribus, hic modi neque officia ex laborum exercitationem totam? Corporis quaerat, blanditiis
          libero magni maiores repellendus harum est. Ipsam soluta dicta exercitationem, ullam consequuntur quis totam
          accusamus nesciunt commodi doloribus perferendis, numquam ipsum tempora. Vitae, optio doloremque? At nihil rem
          excepturi commodi reprehenderit quae dignissimos nostrum neque laboriosam! Nesciunt nobis sapiente quam
          molestias tempore aliquam voluptates a cum debitis, molestiae, corporis vero fugit quaerat repellendus in
          laudantium architecto eos, eligendi voluptas! Magni doloremque repudiandae tenetur voluptate. Eveniet, alias?
          Aliquid aspernatur sapiente dolorum minus, nulla accusantium laudantium. Asperiores harum laboriosam,
          assumenda, esse quaerat eaque saepe consectetur qui distinctio, accusantium iusto! Quae, incidunt consequuntur
          nihil illum repellendus commodi molestiae enim. Quaerat voluptatum maxime soluta veniam eaque assumenda magni
          facilis! Odit natus ipsam doloremque alias quae est et, enim quod? Eaque maiores, consequuntur quibusdam totam
          dolor ipsam suscipit quasi. Minus, quibusdam! Tenetur fuga repellat distinctio esse dolores, aliquid autem
          alias, ducimus enim nobis ea sed illo saepe neque quas placeat odio quibusdam unde hic recusandae, eaque
          mollitia. Tempora modi dolor est? Nemo deserunt repudiandae dicta commodi ducimus facilis doloremque veritatis
          quae, iure sunt, porro odit maiores beatae! Odit, rerum earum repellat minus inventore iure, debitis dolorem,
          quae distinctio impedit odio non. Autem temporibus praesentium et in architecto qui suscipit quisquam ipsa
          quod, voluptates nam, ab placeat voluptas quas! Expedita consequatur, necessitatibus sed accusamus laudantium
          aperiam quod. Porro beatae incidunt eos dolore.
        </TimelineItem>
        <TimelineItem year="Sept. 2022" title="Going to Booz Allen Hamilton 💼">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam dolores fugiat ullam praesentium
          minus necessitatibus autem assumenda vel laborum consequuntur, sit quaerat veniam quasi, laboriosam commodi
          eos non voluptates! Magnam esse repudiandae reiciendis incidunt, earum culpa error ipsa porro ipsum veritatis
          dolor consequatur, maiores commodi expedita, soluta ullam. Obcaecati quis eveniet consectetur iure excepturi
          autem rerum harum exercitationem tempora. Optio accusamus vitae beatae eius, maxime non fuga exercitationem ad
          libero. Sed doloribus, hic modi neque officia ex laborum exercitationem totam? Corporis quaerat, blanditiis
          libero magni maiores repellendus harum est. Ipsam soluta dicta exercitationem, ullam consequuntur quis totam
          accusamus nesciunt commodi doloribus perferendis, numquam ipsum tempora. Vitae, optio doloremque? At nihil rem
          excepturi commodi reprehenderit quae dignissimos nostrum neque laboriosam! Nesciunt nobis sapiente quam
          molestias tempore aliquam voluptates a cum debitis, molestiae, corporis vero fugit quaerat repellendus in
          laudantium architecto eos, eligendi voluptas! Magni doloremque repudiandae tenetur voluptate. Eveniet, alias?
          Aliquid aspernatur sapiente dolorum minus, nulla accusantium laudantium. Asperiores harum laboriosam,
          assumenda, esse quaerat eaque saepe consectetur qui distinctio, accusantium iusto! Quae, incidunt consequuntur
          nihil illum repellendus commodi molestiae enim. Quaerat voluptatum maxime soluta veniam eaque assumenda magni
          facilis! Odit natus ipsam doloremque alias quae est et, enim quod? Eaque maiores, consequuntur quibusdam totam
          dolor ipsam suscipit quasi. Minus, quibusdam! Tenetur fuga repellat distinctio esse dolores, aliquid autem
          alias, ducimus enim nobis ea sed illo saepe neque quas placeat odio quibusdam unde hic recusandae, eaque
          mollitia. Tempora modi dolor est? Nemo deserunt repudiandae dicta commodi ducimus facilis doloremque veritatis
          quae, iure sunt, porro odit maiores beatae! Odit, rerum earum repellat minus inventore iure, debitis dolorem,
          quae distinctio impedit odio non. Autem temporibus praesentium et in architecto qui suscipit quisquam ipsa
          quod, voluptates nam, ab placeat voluptas quas! Expedita consequatur, necessitatibus sed accusamus laudantium
          aperiam quod. Porro beatae incidunt eos dolore.
        </TimelineItem>
        <TimelineItem year="Jun. 2025" title="What's next? 🤔">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam dolores fugiat ullam praesentium
          minus necessitatibus autem assumenda vel laborum consequuntur, sit quaerat veniam quasi, laboriosam commodi
          eos non voluptates! Magnam esse repudiandae reiciendis incidunt, earum culpa error ipsa porro ipsum veritatis
          dolor consequatur, maiores commodi expedita, soluta ullam. Obcaecati quis eveniet consectetur iure excepturi
          autem rerum harum exercitationem tempora. Optio accusamus vitae beatae eius, maxime non fuga exercitationem ad
          libero. Sed doloribus, hic modi neque officia ex laborum exercitationem totam? Corporis quaerat, blanditiis
          libero magni maiores repellendus harum est. Ipsam soluta dicta exercitationem, ullam consequuntur quis totam
          accusamus nesciunt commodi doloribus perferendis, numquam ipsum tempora. Vitae, optio doloremque? At nihil rem
          excepturi commodi reprehenderit quae dignissimos nostrum neque laboriosam! Nesciunt nobis sapiente quam
          molestias tempore aliquam voluptates a cum debitis, molestiae, corporis vero fugit quaerat repellendus in
          laudantium architecto eos, eligendi voluptas! Magni doloremque repudiandae tenetur voluptate. Eveniet, alias?
          Aliquid aspernatur sapiente dolorum minus, nulla accusantium laudantium. Asperiores harum laboriosam,
          assumenda, esse quaerat eaque saepe consectetur qui distinctio, accusantium iusto! Quae, incidunt consequuntur
          nihil illum repellendus commodi molestiae enim. Quaerat voluptatum maxime soluta veniam eaque assumenda magni
          facilis! Odit natus ipsam doloremque alias quae est et, enim quod? Eaque maiores, consequuntur quibusdam totam
          dolor ipsam suscipit quasi. Minus, quibusdam! Tenetur fuga repellat distinctio esse dolores, aliquid autem
          alias, ducimus enim nobis ea sed illo saepe neque quas placeat odio quibusdam unde hic recusandae, eaque
          mollitia. Tempora modi dolor est? Nemo deserunt repudiandae dicta commodi ducimus facilis doloremque veritatis
          quae, iure sunt, porro odit maiores beatae! Odit, rerum earum repellat minus inventore iure, debitis dolorem,
          quae distinctio impedit odio non. Autem temporibus praesentium et in architecto qui suscipit quisquam ipsa
          quod, voluptates nam, ab placeat voluptas quas! Expedita consequatur, necessitatibus sed accusamus laudantium
          aperiam quod. Porro beatae incidunt eos dolore.
        </TimelineItem>
      </div>
    </div>
  );
}
