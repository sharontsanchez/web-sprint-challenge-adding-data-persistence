exports.seed = async function(knex) {
    return await knex('tasks').insert([
        {
            task_description: "task_1",
            task_notes: "project_1's task",
            task_completed: true,
            project_id: 1,
        },
        {
            task_description: "task_2",
            task_notes: "project_2's task",
            task_completed: true,
            project_id: 2,
        },
        {
            task_description: "task_3",
            task_notes: "project_3's task",
            task_completed: false,
            project_id: 3,
        },

    ])
  }