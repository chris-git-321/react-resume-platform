output "site_url" {
  description = "Public URL of the deployed site"
  value       = "http://${aws_lb.main.dns_name}"
}

output "ecs_cluster_name" {
  description = "ECS cluster name, for CLI troubleshooting"
  value       = aws_ecs_cluster.main.name
}

output "ecs_service_name" {
  description = "ECS service name, for CLI troubleshooting"
  value       = aws_ecs_service.app.name
}

output "log_group_name" {
  description = "CloudWatch log group holding container logs"
  value       = aws_cloudwatch_log_group.app.name
}