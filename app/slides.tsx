import { Box, Heading, Text } from "@chakra-ui/react";

export const slides = [
	{
		img: "/backgrounds/field.webp",
		title: (
			<>
				<Box as="span" color="vampire-black">Une </Box>
				<Box as="span" color="indian-yellow">assurance</Box> paramétri&shy;que
			</>
		),
		subtitle: (
			<>
				Tout est <Box as="span" color="spanish-orange" fontStyle="italic">prévu </Box><wbr />
				pour <Box as="span" color="spanish-orange" fontStyle="italic"> l’imprévu</Box>
			</>
		),
		description: "Une indemnisation plus rapide et plus efficace et sans avoir à prouver les pertes subies.",
		modalHeading: <>L’assurance paramétrique</>,
		modalBody:
			<Text color="vampire-black">
				L&apos;assurance paramétrique est une approche <Box as="span" color="indian-yellow">innovante</Box> qui propose des solutions
				adaptées aux défis modernes. Contrairement à l&apos;assurance traditionnelle, qui mesure les dommages ou pertes subis par les assurés,
				l&apos;assurance paramétrique se concentre sur <Box as="span" color="fulvous" >des paramètres spécifiques prédéfinis</Box>.
				Ces paramètres tels que la vitesse du vent, les précipitations et l&apos;indice de rendement peuvent être mesurés objectivement
				et sont <Box as="span" color="indian-yellow" >indépendants de la situation individuelle de l&apos;assuré</Box>.
				Grâce à cette approche <Box as="span" color="fulvous" >basée sur des données quantifiables</Box>, l&apos;assurance paramétrique permet
				un règlement des sinistres plus rapide et une plus grande transparence. De plus, <Box as="span" color="indian-yellow" >il est possible
					de couvrir des risques difficilement assurables</Box>, tels que les catastrophes naturelles et les fluctuations des prix des matières
				premières.
			</Text>,
		mode: "ligth"
	},
	{
		img: "/backgrounds/cube.webp",
		title: (<><Box as="span" color="spanish-orange">La</Box> Dao</>),
		subtitle: (<>
			La solution d’assurance <Box as="span" color="fulvous">du </Box>
			<Box as="span" color="fulvous">futur</Box>
		</>),
		description: "Une pool de liquidités et des couvertures autogérées par la communauté.",
		modalHeading: <>Organisation autonome décentralisée</>,
		modalBody:
			<Text color="vampire-black">
				Les DAO représentent une nouvelle forme d&apos;organisation qui émerge avec la technologie blockchain. Elles fonctionnent <Box as="span" color="indian-yellow">sans l&apos;intervention d&apos;une autorité centrale</Box>. Elles s&apos;appuient sur des contrats intelligents, des programmes informatiques qui s&apos;exécutent automatiquement et de manière <Box as="span" color="indian-yellow">transparente</Box>, pour assurer une prise de décision et des transactions commerciales partagées.

				Les DAO présentent de nombreux avantages, tels que l&apos;élimination des intermédiaires et leurs coûts associés, <Box as="span" color="indian-yellow">une gouvernance démocratique</Box> avec des droits de vote égaux pour tous les membres et une transparence totale avec des enregistrements immuables de toutes les transactions sur la blockchain.

				Les DAO ouvrent de nouvelles opportunités <Box as="span" color="indian-yellow">d&apos;innovation</Box>, de collaboration et de <Box as="span" color="indian-yellow">création de valeurs</Box> à travers les communautés en ligne.
			</Text>,
		mode: "dark"
	},
	{
		img: "/backgrounds/oracle.webp",
		title: (<><Box as="span" color="indian-yellow" >L’oracle</Box> MYOWLY</>),
		subtitle: (
			<>
				La <Box as="span" color="indian-yellow" >fiabilité</Box> des
				<Box as="span" color="spanish-orange"> contrats intelligents</Box>
			</>
		),
		description: "Des sources de données fiables utilisées pour déclencher les smart contracts.",
		modalHeading: <>L’oracle</>,
		modalBody:
			<Text color="vampire-black">
				Les oracles de la blockchain sont l&apos;élément clé qui permet aux contrats intelligents de communiquer avec le monde réel. Ces oracles agissent comme des ponts entre les données externes et les applications basées sur la blockchain.

				Les contrats intelligents d&apos;Oracle fonctionnent de manière fiable et sécurisée pour fournir des informations en temps réel à partir de sources externes telles que les prix des devises, les conditions météorologiques et les résultats des matchs sportifs.

				Ces données sont validées avant d&apos;être intégrées dans des contrats intelligents pour garantir l&apos;intégrité et l&apos;authenticité des informations transmises.

				Que ce soit pour les applications financières, les marchés de prédiction ou les systèmes d&apos;assurance décentralisés, les oracles blockchain fournissent une solution fiable et transparente pour intégrer des données externes dans des applications basées sur la blockchain.
			</Text>,
		mode: "dark"
	},
	{
		img: "/backgrounds/ia.webp",
		title: (
			<>
				<Box as="span" color="vampire-black">Une</Box> <Box as="span" color="indian-yellow">IA</Box> ACTUARIELLE

			</>),
		subtitle: (
			<>La <Box as="span" color="indian-yellow">précision</Box>,
				pour <Box as="span" color="spanish-orange">un avenir sûr</Box>
			</>),
		description: "L'intelligence artificielle  analyse des données complexes et prévoit les risques futurs avec une précision accrue.",
		modalHeading: <>IA Actuarielle</>,
		modalBody:
			<Text color="vampire-black">
				L&apos;IA actuarielle, ou intelligence actuarielle artificielle, est un système informatique qui combine les avancées de l&apos;intelligence artificielle et des compétences actuarielles pour analyser et évaluer les risques financiers et assurantiels.

				Ces IA utilisent des algorithmes avancés et des techniques d&apos;apprentissage automatique pour traiter d&apos;énormes quantités de données et créer des modèles prédictifs précis. L&apos;IA actuarielle a la capacité de reconnaître des modèles et des tendances complexes, permettant aux professionnels de l&apos;assurance et de la finance de prendre des décisions éclairées concernant la tarification des produits, la gestion de portefeuilles et l&apos;estimation des sinistres.

				Ces systèmes innovants peuvent également automatiser certaines tâches répétitives, libérant ainsi les actuaires pour se concentrer sur des activités à plus forte valeur ajoutée.
			</Text>,
		mode: "ligth"
	},
];

