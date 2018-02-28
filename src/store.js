export const profile = {
  name: "Foo",
  lastName: "Bar",
  statements: [
    {
      text: "Foo"
    },
    {
      text: "Bar"
    }
  ],
  socials: [
    {
      url: "url",
      iconName: "github"
    },
    {
      url: "url",
      iconName: "stack-overflow"
    },
    {
      url: "url",
      iconName: "twitter"
    },
    {
      url: "url",
      iconName: "facebook"
    }
  ],
  resume: {
    chapters: [
      {
        title: "Intro",
        sections: [
          {
            title: null,
            url: null,
            from: null,
            to: null,
            text:
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.",
            notes: [],
            categories: [],
            tags: []
          }
        ]
      },
      {
        title: "Skills",
        sections: [
          {
            title: null,
            url: null,
            from: null,
            to: null,
            text: null,
            notes: [],
            categories: [
              {
                label: "Languages",
                items: ["Foo", "Bar", "Foo Bar"]
              },
              {
                label: "Frameworks",
                items: ["Foo", "Bar"]
              },
              {
                label: "Tools",
                items: ["Foo", "Bar"]
              }
            ],
            tags: []
          }
        ]
      },
      {
        title: "Projects",
        sections: [
          {
            title: "Foo Bar",
            url: null,
            from: null,
            to: null,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            notes: [],
            categories: [],
            tags: ["Foo", "Bar", "Foo Bar"]
          }
        ]
      }
    ]
  },
  fullName: function() {
    return this.name + " " + this.lastName;
  }
};
