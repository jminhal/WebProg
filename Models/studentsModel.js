const courseId = 2;
var pool = require("./connection");
module.exports.getAllStudents = async function() { 
    try {
        const sql = "SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_cur_id = "+courseId;
        const students = await pool.query(sql);
        return students;
    } catch (err) {
        return err;
    } 
}
module.exports.getStudent = async function(pos) {

    try {
        let sql = "SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_id = ?";
        let student = await pool.query(sql,[pos]);
        let infoStudent = student[0];
        sql = "SELECT dis_id AS id, dis_nome AS name, dis_creditos AS ects, pla_semestre AS semester, ins_nota AS grade, ins_id FROM disciplinas, planoestudos, inscricoes WHERE dis_id = pla_dis_id AND ins_pla_dis_id = pla_dis_id AND ins_alu_id = ? AND pla_cur_id=" +courseId;
        infoStudent.grades = await pool.query(sql,[pos]);
        return infoStudent;
    }
    catch (err) {
        console.log(err);
        return err;
    }
};

module.exports.saveGrade = function(pos, unit) {
    try { 
        let sql = "UPDATE inscricoes SET ins_dt_avaliacao = ? , ins_nota = ? WHERE ins_id = ?";
        let result = await pool.query(sql,[ new Date(), unit.grade,unit.id ]);
        if ( result.changedRows > 0 ) return { msg: "Changed grade of unit " + unit.unit };
        else return { msg: "ERROR: Iscription does not correspond to the student and/or unit!" };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    
}
