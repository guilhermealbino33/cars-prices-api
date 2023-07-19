export interface CarProps {
  id?: string;
  manufacturer: string;
  model: string;
  modelYear: string;
  licensePlate: string;
  code: string;
  msrp: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Car {
  private props: CarProps;

  constructor(props: CarProps) {
    this.props = props;
  }

  get getProps() {
    return { ...this.props };
  }

  get id() {
    return this.props.id;
  }

  get deletedAt() {
    return this.props.deletedAt;
  }
}
