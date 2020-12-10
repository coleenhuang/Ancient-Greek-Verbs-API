DROP TABLE IF EXISTS principal_parts;

CREATE TABLE principal_parts(
    ID SERIAL PRIMARY KEY,
    present VARCHAR(255) NOT NULL,
    future VARCHAR(255) NOT NULL,
    aorist VARCHAR(255) NOT NULL,
    perfect VARCHAR(255) NOT NULL,
    prf_mid_pass VARCHAR(255) NOT NULL,
    aor_pass VARCHAR(255) NOT NULL,
    def_en VARCHAR(255) NOT NULL,
    def_zh VARCHAR(255) NOT NULL
);