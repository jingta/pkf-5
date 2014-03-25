'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BlogGenerator = module.exports = function BlogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BlogGenerator, yeoman.generators.Base);

BlogGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  
  /// Look at the prompts array
  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];
  /// 

  /// this.prompt ate up our prompts array for it's first argument, 
  // then a callback that will execute after all of the responses 
  // have come in
  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
  ///
};


/// This section is where you tell Yeoman what to create when
// generator-blog is called
BlogGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

BlogGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
/// 
