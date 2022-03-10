function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Recipe name required'
    }
    if (!input.summary) {
        errors.summary = 'Recipe summary required'
    }
    if (!input.score) {
        errors.score = 'Recipe score required'
    } else if (input.score < 0 || input.score > 100) {
        errors.score = 'Recipe score must be between 0 and 100'
    }

    if (!input.healthScore) {
        errors.healthScore = 'Recipe health score required'
    } else if (input.healthScore < 0 || input.healthScore > 100) {
        errors.healthScore = 'Recipe health score must be between 0 and 100'
    }

    if (input.analyzedInstructions.length === 0) {
        errors.steps = 'Recipe steps required'
    }
    if (input.diets.length === 0) {
        errors.diets = 'Recipe diets required'
    }
    if (!input.image) {
        errors.image = 'Recipe image required'
    }
    return errors
}

module.exports = validate;