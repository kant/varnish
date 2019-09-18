import * as React from 'react';
import { Icon } from 'antd';
import { IconProps } from 'antd/lib/icon';

interface ImgIconProps {
    src: string;
}
export class ImgIcon extends React.PureComponent<ImgIconProps & IconProps> {
  render() {
      let {src, ...other} = this.props;
      return (
        <Icon {...other} component={() => <img src={src} />} />
      );
    }
}

interface SvgIconProps {
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
export class SvgIcon extends React.PureComponent<SvgIconProps & IconProps> {
    render() {
      let {Svg, ...other} = this.props;
      return (
        <Icon {...other} component={() => <Svg />} />
      );
    }
}

// export Ant Icon as a convenience
export { Icon };
