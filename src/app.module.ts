import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';

const dbconf = TypeOrmModule.forRoot({
  type: 'postgres',
  host: '94.130.51.151',
  port: 5432,
  username: 'dkolenda_devleader',
  password: 'Coding@dojo1',
  database: 'dkolenda_devleader',
  entities: [''],
  synchronize: true,
});

@Module({
  imports: [dbconf, PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
