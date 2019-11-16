DROP TABLE IF EXISTS citystatistics CASCADE;

CREATE TABLE citystatistics (
    ranking INT NOT NULL,
	metroarea VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	metropolitanpopulation VARCHAR(50) NOT NULL,
	averageincome VARCHAR(50) NOT NULL,
	studio VARCHAR(50) NOT NULL,
	onebedroom VARCHAR(50) NOT NULL,
	twobedroom VARCHAR(50) NOT NULL
	);
	
SELECT * FROM citystatistics