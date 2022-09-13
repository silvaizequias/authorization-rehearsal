export interface ProfileProps {
  group: number[]
}

export class Profile {
  private props: ProfileProps

  get group() {
    return this.props.group
  }

  constructor(props: ProfileProps) {
    this.props = props
  }
}
